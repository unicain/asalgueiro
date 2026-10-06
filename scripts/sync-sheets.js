import fs from 'fs';
import path from 'path';

// Função para extrair o link da planilha
export function getSpreadsheetUrl() {
  const rootFile = path.resolve('./SPREADSHEET_URL.txt');
  if (fs.existsSync(rootFile)) {
    const content = fs.readFileSync(rootFile, 'utf-8').trim();
    if (content && content.startsWith('http')) {
      return content;
    }
  }

  const configFile = path.resolve('./src/data/config.ts');
  if (fs.existsSync(configFile)) {
    const configContent = fs.readFileSync(configFile, 'utf-8');
    const match = configContent.match(/GOOGLE_SHEETS_CSV_URL\s*=\s*["']([^"']+)["']/);
    if (match && match[1] && match[1].startsWith('http')) {
      return match[1].trim();
    }
  }

  return null;
}

// Converte link comum do Google Sheets para link direto de exportação CSV
export function normalizeCsvUrl(rawUrl) {
  let url = rawUrl.trim();
  
  // Se for o link publicado na web com output=csv, já está pronto
  if (url.includes('/pub') && (url.includes('output=csv') || url.includes('output=tsv'))) {
    return url;
  }

  // Se for o link padrão de compartilhamento: https://docs.google.com/spreadsheets/d/{ID}/edit...
  const match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match && match[1]) {
    const sheetId = match[1];
    return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;
  }

  return url;
}

async function run() {
  const rawUrl = getSpreadsheetUrl();
  if (!rawUrl) {
    console.log('Nenhum link encontrado em SPREADSHEET_URL.txt ou src/data/config.ts.');
    process.exit(1);
  }

  const csvUrl = normalizeCsvUrl(rawUrl);
  console.log(`Baixando dados de: ${csvUrl}`);

  try {
    const res = await fetch(csvUrl);
    if (!res.ok) {
      throw new Error(`Erro ao baixar planilha: ${res.status} ${res.statusText}`);
    }
    const text = await res.text();

    fs.writeFileSync('./public/conteudos-site-andrea-salgueiro.csv', text, 'utf-8');
    console.log('Planilha salva com sucesso em ./public/conteudos-site-andrea-salgueiro.csv');
  } catch (err) {
    console.error('Falha no download:', err.message);
    process.exit(1);
  }
}

if (process.argv[1] && process.argv[1].endsWith('sync-sheets.js')) {
  run();
}

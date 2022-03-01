const { unlink, readdir, writeFile } = require('fs/promises');
const { basename } = require('path');

(async () => {
  // Remove existing IconTable.js for re-generation
  try { await unlink('./src/IconTable.js') } catch (e) { }

  const files = (await readdir('./node_modules/@adobe/react-spectrum-workflow/dist')).filter(item => !['index.js', 'util.js'].includes(item));

  const iconTalbe =
`${files.reduce(
  (pre, cur) => pre + `import { A4u${basename(cur, '.js')} } from '@adobe/react-spectrum-workflow/dist/${basename(cur, '.js')}';\n`, '')}
export default () =>
  <table>
    <thead>
      <tr>
        <th style={{textAlign: 'left'}}>Name</th>
        <th>Icon</th>
      </tr>
      <tr className='icon-total-num-row'>
        <td>Total</td>
        <td>${files.length}</td>
      </tr>
    </thead>
    <tbody>
    ${files.reduce(
      (pre, cur) => pre + `      <tr className="A4u${basename(cur, '.js')}">
        <td>${basename(cur, '.js')}</td>
        <td><A4u${basename(cur, '.js')} /></td>
      </tr>\n`, '')}
    </tbody>
  </table>
`;

  await writeFile('./src/IconTable.js', Buffer.from(iconTalbe));
})();
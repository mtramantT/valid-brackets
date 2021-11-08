import React from 'react';
import { isValid, isInvalidAt } from './ValidBrackets';

const parentheses = [
  { test: '{}', result: 'true', index: -1 },
  { test: '()', result: 'true', index: -1 },
  { test: '[]', result: 'true', index: -1 },
  { test: '({[]})', result: 'true', index: -1 },
  { test: '(abcdefg)', result: 'true', index: -1 },
  { test: '(1234}', result: 'false', index: 5 },
  { test: '[((})]', result: 'false', index: 3 },
];

function App() {
  return (
    <div className="App">
                  <table>
                <thead>
                    <tr>
                        <th>Test String</th>
                        <th>Result</th>
                        <th>Index</th>
                        <th>Actual Result</th>
                        <th>Actual Index</th>
                    </tr>
                </thead>
                <tbody>
                    {parentheses.map((para, index) => {
                        return (
                            <tr style={{ border: '1px solid black', padding: '4px' }} key={index}>
                                <td style={{ border: '1px solid black', padding: '4px' }}>{para.test}</td>
                                <td style={{ border: '1px solid black', padding: '4px' }}>
                                    {isValid(para.test).toString()}
                                </td>
                                <td style={{ border: '1px solid black', padding: '4px' }}>{isInvalidAt(para.test)}</td>
                                <td style={{ border: '1px solid black', padding: '4px' }}>{para.result}</td>
                                <td style={{ border: '1px solid black', padding: '4px' }}>{para.index}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
    </div>
  );
}

export default App;

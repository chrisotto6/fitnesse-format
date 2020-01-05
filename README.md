# fitnesse-format

NPM package to format fitnesse wiki.

## Usage

`npm install --save-dev fitnesse-format`

Import the package into your JS files

`import * as wikiformatter from fitnesse-format`

The package only takes in a string so you can read in a whole FitNesse test or just a section of the test as string. Just call what you imported it as in order to trigger the formatting.

`const wiki = new wikiformatter();`

`const formattedWiki = wiki.format(string);`

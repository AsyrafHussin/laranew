import {Command, flags} from '@oclif/command';
import {cd, exec} from 'shelljs';
const figlet = require('figlet');
const {version} = require('../package.json');

class Laranew extends Command {
  static description = 'Generate Laravel project based on https://github.com/AsyrafHussin/laravel-boilerplate-v2';

  static flags = {
    version: flags.version({char: 'v'}),
  };

  static args = [{name: 'project'}];

  async run() {
    console.log(figlet.textSync('Laranew'));
    console.log(`v${version} by Asyraf Hussin \n`);

    const {argv} = this.parse(Laranew);

    const projectName = argv[0] ?? 'project';

    exec(`git clone git@github.com:AsyrafHussin/laravel-boilerplate-v3.git ${projectName}`);
    cd(`${projectName}`);
    exec('./setup.sh --color=always');
  }
}

export = Laranew;

import {Command, flags} from '@oclif/command';
import {cd, exec} from 'shelljs';

class Laranew extends Command {
  static description = 'Generate Laravel project based on https://github.com/AsyrafHussin/laravel-boilerplate-v2';

  static flags = {
    version: flags.version({char: 'v'}),
  };

  static args = [{name: 'project'}];

  async run() {
    const {argv} = this.parse(Laranew);

    const projectName = argv[0] ?? 'project';

    exec(`git clone https://github.com/AsyrafHussin/laravel-boilerplate-v2.git ${projectName}`);
    cd(`${projectName}`);
    exec('./setup.sh --color=always');
  }
}

export = Laranew;

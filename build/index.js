import rspack from '@rspack/core'
import config from '../config/rspack.prod.mjs'
import ora from 'ora'

const spinner = ora('building...').start()

rspack(config, (err, stats) => {

  spinner.stop()
  if (err) throw err

  console.log(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'))
    process.exit(1)
  }

  console.log(chalk.cyan('  Build complete.\n'))
})

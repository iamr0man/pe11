const Fs = require('fs')
const Path = require('path')
const Listr = require('listr')
const Axios = require('axios')

/**
 * Start tasks to prepare or destroy data in MongoDB
 *
 * @param  {Listr} tasks  Listr instance with tasks
 * @return {void}
 */
function kickoff(tasks) {
  tasks
    .run()
    .then(process.exit)
    .catch(process.exit)
}

/**
 * Entry point for the NPM "pumpitup" and "cleanup" scripts
 * Imports movie and TV show sample data to MongoDB
 */
if (process.argv) {
  const tasks = [
    {
      title: 'Downloading videos with axios',
      task: async () => {

        for (let i = 64; i <= 120; i++) {
          // const url
          const path = Path.resolve(__dirname, 'tmp', `lesson${i}.mp4`)
          const writer = Fs.createWriteStream(path)

          const response = await Axios({
            url,
            method: 'GET',
            responseType: 'stream'
          })

          response.data.pipe(writer)
        }

        return new Promise((resolve, reject) => {
          writer.on('finish', resolve)
          writer.on('error', reject)
        })
      }
    }
  ]

  kickoff(new Listr(tasks))
}
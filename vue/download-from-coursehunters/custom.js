// `https://vs1.coursehunter.net/mosh-react-mastering/lesson${i}.mp4`

const Fs = require('fs');
const Path = require('path');
const Axios = require('axios');

const tasks = [
    {
        title: 'Downloading videos with axios',
        task: async (url, i) => {
            // const url
            const path = Path.resolve(
                __dirname,
                'Advanced Components',
                `lesson${i}.mp4`
            );
            const writer = Fs.createWriteStream(path);

            const response = await Axios({
                url,
                method: 'GET',
                responseType: 'stream'
            });

            response.data.pipe(writer);

            return new Promise((resolve, reject) => {
                writer.on('finish', resolve);
                writer.on('error', reject);
            });
        }
    }
];

for (let i = 1; i <= 12; i++) {
    tasks[0].task(`https://vs2.coursehunter.net/vm-ac-cc/lesson${i}.mp4`, i);
}

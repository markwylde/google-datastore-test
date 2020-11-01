const { Datastore } = require('@google-cloud/datastore');

async function main() {
  const datastore = new Datastore({
    keyFilename: process.env.GOOGLE_KEY_FILE
  });

  const kind = 'Task';
 
  const name = 'sampletask1';
 
  const taskKey = datastore.key([kind, name]);
 
  const task = {
    key: taskKey,
    data: {
      description: 'Buy milk',
    },
  };
 
  await datastore.save(task);
  console.log(`Saved ${task.key.name}: ${task.data.description}`);

  console.log('exiting in 10 seconds');
  setTimeout(() => {
    process.exit(0);
  }, 10000)
}

main();

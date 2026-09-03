// create a promise inside a function called task and call this function in another function called start to display result using async and await.

function task() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;

            if (success) {
                resolve("Task completed successfully!, You have done it");
            } else {
                reject("Task failed!, try again..");
            }
        }, 2000);
    });
}

async function start() {
    try {
        const result = await task();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

start();




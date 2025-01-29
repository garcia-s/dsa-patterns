/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    await new Promise(res => setTimeout(resolve, millis))
}


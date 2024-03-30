// https://discord.com/api/webhooks/1223442391743070350/qenuh9PwwwOBCfp_dCrr4f490HjbXwrU877Zt8TddUGchl8-78yu5ziE1aQfyr-1GuSo
fetch('https://discord.com/api/webhooks/1223442391743070350/qenuh9PwwwOBCfp_dCrr4f490HjbXwrU877Zt8TddUGchl8-78yu5ziE1aQfyr-1GuSo', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        content: 'Hello, World!',
        username: 'NEVA EVA BE A NEGA.'
    })
});
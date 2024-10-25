import AWS from 'aws-sdk';

AWS.config.update({
    region: 'us-east-2',
    accessKeyId: 'AKIASVQKH2QRSV4EW3J3',
    secretAccessKey: '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'
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export { dynamoDB };
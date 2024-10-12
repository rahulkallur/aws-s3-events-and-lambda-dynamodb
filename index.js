import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client.js";
import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { ddbClient } from "./dbClient.js";

export const handler = async (event) => {
  console.log("Request: ", JSON.stringify(event, undefined, 2));
  // TODO implement
  // List Objects from Bucket

  // Write to DynamoDB

  try {
    const params = {
      Bucket: event.Records[0].s3.bucket.name, // bucket name
    };

    const objectList = await s3Client.send(new ListObjectsV2Command(params));

    console.log("Success", objectList);

    // 2- write on dynamodb table
    for (const content of objectList.Contents) {
      console.log("Content: %j", content);

      // create item into dynamoDB
      const params = {
        TableName: "bucketobjects",
        Item: marshall(content || {}, {
          removeUndefinedValues: true,
          convertClassInstanceToMap: true,
        }),
      };

      const createResult = await ddbClient.send(new PutItemCommand(params));
      console.log(createResult);
    }
  } catch (err) {
    console.error(err);
  }
};

handler();
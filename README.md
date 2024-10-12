# S3 to DynamoDB Lambda Function

This AWS Lambda function is triggered when a file is uploaded to a specified S3 bucket. The function reads the event, extracts the bucket name and file name from the event, and creates a corresponding record in a DynamoDB table.

Features
Automatically triggered by S3 events (file uploads).
Captures the bucket name and file name from the S3 event.
Inserts the bucket name, file name, and a timestamp into a DynamoDB table.
Prerequisites
To deploy and run this Lambda function, the following AWS services need to be set up:

S3 Bucket: The bucket to which files are uploaded and trigger the Lambda function.
DynamoDB Table: A table to store the bucket name, file name, and other metadata.
DynamoDB table must have a primary key (e.g., Key or KeyID) and fields for bucket name, file name, and timestamp.

# Permissions
The Lambda function requires the following permissions:

S3 Read Access: To read the S3 event and capture file details.
DynamoDB Write Access: To insert records into the specified DynamoDB table.
CloudWatch Logs Access: For logging Lambda execution data.

# sConclusion
This Lambda function automates the process of capturing S3 upload events and storing metadata in DynamoDB, allowing you to track file uploads in your AWS environment.
#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkDirectoryserviceAndFsxStack } from '../lib/cdk-directoryservice-and-fsx-stack';

const app = new cdk.App();
new CdkDirectoryserviceAndFsxStack(app, 'CdkDirectoryserviceStack', {
    directoryServiceName: "aurbac.kabits.com",
    directoryServiceShortName: "aurbackabits",
    directoryServicePasswordSecret: "directoryServicePassword",
    fsxStorageCapacity: 100,
    fsxThroughputCapacity: 16,
});

import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkDirectoryserviceAndFsx from '../lib/cdk-directoryservice-and-fsx-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkDirectoryserviceAndFsx.CdkDirectoryserviceAndFsxStack(app, 'MyTestStack', {
      directoryServiceName: "aurbac.kabits.com",
      directoryServiceShortName: "aurbackabits",
      directoryServicePasswordSecret: "directoryServicePassword",
      fsxStorageCapacity: 100,
      fsxThroughputCapacity: 16,
    });
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});

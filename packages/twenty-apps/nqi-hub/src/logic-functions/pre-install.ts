import {
  definePreInstallLogicFunction,
  type InstallLogicFunctionPayload,
} from 'twenty-sdk';

const handler = async (payload: InstallLogicFunctionPayload): Promise<void> => {
  console.log(
    `NQI Hub pre-install running. Previous version: ${payload.previousVersion || 'fresh install'}`,
  );
};

export default definePreInstallLogicFunction({
  universalIdentifier: 'a1b0c2d3-e4f5-6789-abcd-700000000001',
  name: 'nqi-hub-pre-install',
  description: 'Validates workspace before NQI Hub installation',
  timeoutSeconds: 300,
  handler,
});

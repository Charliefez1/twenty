import {
  definePostInstallLogicFunction,
  type InstallLogicFunctionPayload,
} from 'twenty-sdk';

const handler = async (payload: InstallLogicFunctionPayload): Promise<void> => {
  console.log(
    `NQI Hub post-install complete. Previous version: ${payload.previousVersion || 'fresh install'}`,
  );
  // Future: seed default services, create NDG org, etc.
};

export default definePostInstallLogicFunction({
  universalIdentifier: 'a1b0c2d3-e4f5-6789-abcd-700000000002',
  name: 'nqi-hub-post-install',
  description: 'Seeds default data after NQI Hub installation',
  timeoutSeconds: 300,
  handler,
});

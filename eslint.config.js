import config from '@somehow-digital/eslint-config/typescript';

import withNuxt from './.nuxt/eslint.config.mjs';

// todo: merge config properly
export default withNuxt(...config);

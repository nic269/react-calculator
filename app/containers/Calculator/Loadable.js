/**
 *
 * Asynchronously loads the component for Caculator
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

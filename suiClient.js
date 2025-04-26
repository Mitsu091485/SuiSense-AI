
import { getFullNodeUrl, SuiClient } from '@mysten/sui.js/client';

const suiClient = new SuiClient({ url: getFullNodeUrl('devnet') });
export default suiClient;

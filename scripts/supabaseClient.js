// supabaseClient.js
import { createClient } from '@supabase/supabase-js';
// import('node-fetch').then(({ default: fetch }) => {
//     global.fetch = fetch;
// });

const supabaseUrl = 'https://gynoiozksxkoburmvlpe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5bm9pb3prc3hrb2J1cm12bHBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5NTQ5ODksImV4cCI6MjAxODUzMDk4OX0.evauuapAfcPXvdEnZUrrHF3t-pHVRvxmSt23bioFi00';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // todo. figure out what is up with the tls. this is super insecure.

class SupabaseClient {
    constructor() {
        if (!SupabaseClient.instance) {
            SupabaseClient.instance = createClient(supabaseUrl, supabaseAnonKey);
        }
    }

    getInstance() {
        return SupabaseClient.instance;
    }
}

const instance = new SupabaseClient();
Object.freeze(instance);

export default instance;

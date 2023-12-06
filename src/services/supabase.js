import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://zhuqdlmnwwdzzrnldymm.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpodXFkbG1ud3dkenpybmxkeW1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3Njk1ODIsImV4cCI6MjAxNzM0NTU4Mn0.-5nwIIr-7KJGlkayDCIkAdYPRdTNIrqERUqWHBhuPh4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

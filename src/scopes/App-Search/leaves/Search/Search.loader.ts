import {supabase} from '@/utils/supabase'

export async function clientLoader() {
    return supabase.from('init-test').select()
}
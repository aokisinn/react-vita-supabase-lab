# 起動
npm run dev

# 型生成
npx supabase gen types typescript --project-id "${supabase_id}" --schema public > src/types/supabase.ts

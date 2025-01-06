# 起動
npm run dev

# 型生成
## ローカルの場合
npx supabase gen types typescript --local > database.types.ts

## サーバーの場合
npx supabase gen types typescript --project-id "${supabase_id}" --schema public > src/types/supabase.ts

詳細
https://supabase.com/docs/guides/api/rest/generating-types


# バックエンド
cd backend

## 起動
supabase start
※ Dockerが必要

ファイル変更は自動で反映される

## 停止
supabase stop

## 状態確認
supabase status

例
```
API URL: http://127.0.0.1:54321
GraphQL URL: http://127.0.0.1:54321/graphql/v1
S3 Storage URL: http://127.0.0.1:54321/storage/v1/s3
DB URL: postgresql://postgres:postgres@127.0.0.1:54322/postgres
Studio URL: http://127.0.0.1:54323
Inbucket URL: http://127.0.0.1:54324
JWT secret: super-secret-jwt-token-with-at-least-32-characters-long
anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0
service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU
S3 Access Key: 625729a08b95bf1b7ff351a663f3a23c
S3 Secret Key: 850181e4652dd023b7a98c58ae0d2d34bd487ee0cc3254aed6eda37307425907
S3 Region: local
```

上記の値を参考にローカルの環境変数に設定する
フロントで使用するのはAPI URL, anon key

## デプロイは以下参考
https://supabase.com/docs/guides/functions/deploy

## ローカルのデバッグ

```
supabase functions serve --inspect-mode brk
```

以下詳細
https://supabase.com/docs/guides/functions/debugging-tools
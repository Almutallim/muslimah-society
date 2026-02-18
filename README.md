# Muslimah Society - Pack HTML + Supabase + Stripe

## À faire
1) Remplis `js/supabaseClient.js` avec tes clés Supabase (URL + ANON KEY).
2) Supabase SQL: crée tables `profiles`, trigger, RLS + `content_items`.
3) Storage: bucket `content` en PRIVATE.
4) Stripe: crée 2 prices (Member/VIP).
5) Déploiement sur Vercel:
   - env vars: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, PRICE_MEMBER, PRICE_VIP
   - webhook Stripe: /api/stripe-webhook (event checkout.session.completed)

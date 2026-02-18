// js/gate.js
async function requireAuth(){
  const { data } = await supabaseClient.auth.getUser();
  const user = data.user;
  if(!user){
    window.location.href = "login.html";
    return null;
  }
  return user;
}

async function requireMember(){
  const user = await requireAuth();
  if(!user) return;

  const { data, error } = await supabaseClient
    .from('profiles')
    .select('subscription_status, subscription_tier')
    .eq('id', user.id)
    .single();

  if(error || !data || data.subscription_status !== 'active'){
    window.location.href = "upgrade.html";
    return;
  }
  if(data.subscription_tier !== 'member' && data.subscription_tier !== 'vip'){
    window.location.href = "upgrade.html";
    return;
  }
}

async function requireVIP(){
  const user = await requireAuth();
  if(!user) return;

  const { data, error } = await supabaseClient
    .from('profiles')
    .select('subscription_status, subscription_tier')
    .eq('id', user.id)
    .single();

  if(error || !data || data.subscription_status !== 'active' || data.subscription_tier !== 'vip'){
    window.location.href = "upgrade.html";
    return;
  }
}

async function signedUrl(bucket, path, seconds=60){
  const { data, error } = await supabaseClient
    .storage
    .from(bucket)
    .createSignedUrl(path, seconds);

  if(error) throw error;
  return data.signedUrl;
}

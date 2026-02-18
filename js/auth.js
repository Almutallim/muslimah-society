// js/auth.js
async function register(email, password){
  const { data, error } = await supabaseClient.auth.signUp({ email, password });
  if (error) throw error;
  return data;
}

async function login(email, password){
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function logout(){
  await supabaseClient.auth.signOut();
  window.location.href = "index.html";
}

async function getUser(){
  const { data } = await supabaseClient.auth.getUser();
  return data.user;
}

async function getProfile(){
  const user = await getUser();
  if(!user) return null;

  const { data, error } = await supabaseClient
    .from("profiles")
    .select("subscription_status, subscription_tier, email")
    .eq("id", user.id)
    .single();

  if (error) throw error;
  return data;
}

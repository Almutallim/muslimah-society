// js/billing.js
async function checkout(plan){
  const { data } = await supabaseClient.auth.getSession();
  const access_token = data.session?.access_token;

  if(!access_token){
    window.location.href = "login.html";
    return;
  }

  const res = await fetch("/api/create-checkout-session", {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization": `Bearer ${access_token}`
    },
    body: JSON.stringify({ plan })
  });

  const out = await res.json();
  if(!res.ok){
    alert(out.error || "Erreur paiement");
    return;
  }
  window.location.href = out.url;
}

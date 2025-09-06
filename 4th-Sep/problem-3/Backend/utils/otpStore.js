const store = new Map();

function saveOtp(email, otp) {
  const expiresAt = Date.now() + 5 * 60 * 1000;
  store.set(email, { otp, expiresAt });
}

function verifyOtp(email, otp) {
  const data = store.get(email);
  if (!data) return false;
  if (Date.now() > data.expiresAt) {
    store.delete(email);
    return false;
  }
  if (String(data.otp) === String(otp)) {
    store.delete(email);
    return true;
  }
  return false;
}

module.exports = { saveOtp, verifyOtp };

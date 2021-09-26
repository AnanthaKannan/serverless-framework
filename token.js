const jwt_decode = require('jwt-decode');

function isAuthenticated() {
    const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJlS1RaNml3d0hNUVNGRGVhbzU1ZEdFU3BSZ2RwNEJPQ3NWTGpvcXJDZk5ZIn0.eyJleHAiOjE2Mjk5ODg0MDMsImlhdCI6MTYyOTk4ODEwMywianRpIjoiOGM3MTUxMWMtMGExNi00NmU2LTk4NGMtMDMxZTIzNDM4ZjY2IiwiaXNzIjoiaHR0cHM6Ly9hYWEtZ2F0ZXdheS1zZXJ2aWNlLnByZXByb2QucmVsYXlwbHVzLmNvbS9hdXRoL3JlYWxtcy9yZWxheXBsdXMiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNjBjMWVmMDgtYzA0Ny00MDk4LWJjOGQtYjBjZGEyOWM1ZjgzIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibS0wMjcyIiwic2Vzc2lvbl9zdGF0ZSI6ImZjOTA4NGJmLTFkZDQtNDU5Ni1hNjc1LTE4YjEzM2UxMGMwYSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiR0VORVJBVEVfVFJBTlNBQ1RfTElOSyIsIkJBVENIX0VYUElSRV9MSU5LUyIsIkdFVF9CQVRDSF9FWFBJUkVfTElOS1NfU1RBVFVTIiwiR0VUX0xJTktfVFJBTlNDUklQVCIsIkdFVF9MSU5LU19TVU1NQVJZIiwiR0VUX0xJTktfU1RBVFVTIiwiR0VUX0JBVENIX0xJTktfU1RBVFVTIiwiQkFUQ0hfR0VORVJBVEVfVFJBTlNBQ1RfTElOSyIsIkJJTl9SVUxFU0VUX01BTkFHRSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBkZWZhdWx0LXJlbGF5cGx1cy1hdHRyaWJ1dGVzIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiMDI3MiIsIm5hbWUiOiJmaXJzdE5hbWUgbGFzdE5hbWUiLCJncm91cHMiOlsiL3NwLTEvbWVyY2hhbnRzL20tMDI3MiJdLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJjMDI3Ml9tMTJfY29tbXNjb3BlX2FwaSIsImdpdmVuX25hbWUiOiJmaXJzdE5hbWUiLCJmYW1pbHlfbmFtZSI6Imxhc3ROYW1lIiwiZW1haWwiOiJ0b2RvQGNvbW1zY29wZS5jb20ifQ.Ce_V1FBn2GsB4NVIJhYl9Hj1w5EezU-ffInROzZJjFnHhYiS3o2k8oEvIO7PWlMD_5ObPudz0Ytl_s3-Xdxy_8_UWrCufSVSvNP38eoksPn2FKnLh_CgkOEh3K14XQQWt4jsY1EGkOlCuTrNjydag0mCR9BaJ27ZhF_tQeOlAD7h5pcNgfGoEo8HJXI_f5UdUZL584sMKYuwxwPI0yZuVXnZ4laewyc8CoUG4gyLV7olnmvrfnYmwYBWu_W_uaTBHQ1Cmh-uKu73zC8jfej9sWRS1-gDRXS9fBv8-pIll0fjC3ZMW9LeDfe9j7KssHws-W3L4OjzRWYB4i_AYXZnBQ";
    const refreshToken = "token";
    console.log('token')
    try {
        var { exp } = jwt_decode(token);
        console.log('exp', exp)
        console.log('sub', ((exp *1000) - Date.now()))
        if (Date.now() >= exp * 1000) {
            return false;
          }
          return true;
    } catch (err) {
        console.log('error', err)
      return false;
    }
  }

  const result = isAuthenticated();
  console.log('result', result)
// app/page.tsx
export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to SuiSense AI</h1>
      <p>Deployment successful!</p>
    </div>
  );
}
git add app/page.tsx
git commit -m "Add homepage to fix Vercel 404"
git push

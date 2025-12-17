
export async function POST(req: Request) {
  return Response.json({
  "status": "success",
  "results_count": "integer",
  "search_id": "string"
});
}

export default function PreviewNotice() {
  return (
    <div className="preview-notice">
      <span className="mt-0.5 text-base leading-none text-primary">⚠</span>
      <p className="text-xs leading-relaxed text-muted-foreground">
        <span className="font-semibold text-primary">Design preview only.</span>{" "}
        These pages are visual mockups for internal review. Content is not final or legally binding.
      </p>
    </div>
  );
}

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface TagListProps {
  tags: readonly string[];
  size?: "small" | "medium";
}

export function TagList({ tags, size = "small" }: TagListProps) {
  return (
    <Stack direction="row" flexWrap="wrap" gap={1}>
      {tags.map((tag) => (
        <Chip
          key={tag}
          label={tag}
          size={size}
          variant="outlined"
          sx={{
            fontWeight: 500,
            borderColor: "divider",
            color: "text.secondary",
          }}
        />
      ))}
    </Stack>
  );
}

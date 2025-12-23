import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const members = defineCollection({
  loader: file("src/members.old.yaml"),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    buttonUrl: z.union([z.string().url(), z.string().startsWith("/buttons/")]),
  }),
});

export const collections = { members };

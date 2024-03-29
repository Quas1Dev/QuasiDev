import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
const token = process.env.TOKEN

export default defineConfig({
  branch,
  clientId: "17ef15a4-0cd3-4762-b051-abdb2c436d44", // Get this from tina.io
  token, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        label: "Drafts",
        name: "drafts",
        path: "categories/_drafts",
        fields: [
          {
            type: "boolean",
            name: "published",
            label: "Published",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
            parser: {
              type: "markdown",
            },
          },
        ],
      },
      {
        label: "Tips",
        name: "tips",
        path: "categories/_tips",
        fields: [
          {
            type: "boolean",
            name: "published",
            label: "Published",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
            parser: {
              type: "markdown",
            },
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "layout",
            label: "layout",
          },
          {
            type: "string",
            name: "permalink",
            label: "permalink",
          },
          {
            type: "string",
            name: "description",
            label: "description",
          },
          {
            type: "string",
            name: "categories",
            label: "categories",
            list: true,
          },
          {
            type: "string",
            name: "tags",
            label: "tags",
            list: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "datetime",
            name: "lastUpdated",
            label: "lastUpdated",
          },
          {
            type: "string",
            name: "author",
            label: "author",
          },
          {
            type: "string",
            name: "excerpt_separator",
            label: "excerpt_separator",
          },
          {
            type: "object",
            name: "sources",
            label: "Sources",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
            ],
          },
          {
            type: "object",
            name: "secondary_sources",
            label: "Secondary sources",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
            ],
          },
        ],
      },
      {
        label: "Jekyll",
        name: "jekyll",
        path: "categories/_jekyll",
        fields: [
          {
            type: "boolean",
            name: "published",
            label: "Published",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
            parser: {
              type: "markdown",
            },
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            options: ["article"],
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "permalink",
            label: "Permalink",
            required: true,
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "datetime",
            name: "lastUpdated",
            label: "Last Updated",
          },
          {
            type: "string",
            name: "author",
            label: "Author",
          },
          {
            type: "string",
            name: "excerpt_separator",
            label: "Excerpt Separator",
          },
          {
            type: "number",
            name: "order",
            label: "Order",
            required: true,
          },
          {
            type: "object",
            name: "sources",
            label: "Sources",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
            ],
          },
          {
            type: "object",
            name: "secondary_sources",
            label: "Secondary Sources",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
            ],
          },
        ],
      },
      {
        label: "Batch",
        name: "batch",
        path: "categories/_batch",
        fields: [
          {
            type: "boolean",
            name: "published",
            label: "Published",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
            parser: {
              type: "markdown",
            },
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            options: ["article"],
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "permalink",
            label: "Permalink",
            required: true,
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "datetime",
            name: "lastUpdated",
            label: "Last Updated",
          },
          {
            type: "string",
            name: "author",
            label: "Author",
          },
          {
            type: "string",
            name: "excerpt_separator",
            label: "Excerpt Separator",
          },
          {
            type: "number",
            name: "order",
            label: "Order",
            required: true,
          },
          {
            type: "object",
            name: "sources",
            label: "Sources",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
            ],
          },
          {
            type: "object",
            name: "secondary_sources",
            label: "Secondary Sources",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
            ],
          },
        ],
      },
      {
        label: "Java",
        name: "java",
        path: "categories/_java",
        fields: [
          {
            type: "boolean",
            name: "published",
            label: "Published",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
            parser: {
              type: "markdown",
            },
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            options: ["article"],
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "permalink",
            label: "Permalink",
            required: true,
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "datetime",
            name: "lastUpdated",
            label: "Last Updated",
          },
          {
            type: "string",
            name: "author",
            label: "Author",
          },
          {
            type: "string",
            name: "excerpt_separator",
            label: "Excerpt Separator",
          },
          {
            type: "number",
            name: "order",
            label: "Order",
            required: true,
          },
          {
            type: "object",
            name: "sources",
            label: "Sources",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
            ],
          },
          {
            type: "object",
            name: "secondary_sources",
            label: "Secondary Sources",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
            ],
          },
        ],
      },
    ],
  },
});

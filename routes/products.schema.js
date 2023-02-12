export const postSchemaProducts = {
  type: "object",
  properties: {
    title: { type: "string" },
    artist: { type: "string" },
    year: { type: "string" },
    price: { type: "string" },
    picture: { type: "string", format: "url" },
  },
};

export const getSchemaProducts = {
  type: "object",

  additionalProperties: false,
};

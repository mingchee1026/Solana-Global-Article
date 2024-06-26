export type SolanaGlobalArticle = {
  "version": "0.1.0",
  "name": "solana_global_article",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "article",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "writeIntoArticle",
      "accounts": [
        {
          "name": "article",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "threeWords",
          "type": "string"
        }
      ]
    },
    {
      "name": "resetArticle",
      "accounts": [
        {
          "name": "article",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "article",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "content",
            "type": "string"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "WordTooLong",
      "msg": "Each word must be less than 15 characters"
    }
  ]
};

export const IDL: SolanaGlobalArticle = {
  "version": "0.1.0",
  "name": "solana_global_article",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "article",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "writeIntoArticle",
      "accounts": [
        {
          "name": "article",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "threeWords",
          "type": "string"
        }
      ]
    },
    {
      "name": "resetArticle",
      "accounts": [
        {
          "name": "article",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "article",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "content",
            "type": "string"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "WordTooLong",
      "msg": "Each word must be less than 15 characters"
    }
  ]
};

export type DappStarter = {
  "version": "0.1.0",
  "name": "dapp_starter",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "config",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "deployer",
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
      "name": "increment",
      "accounts": [
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "createRound",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "round",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "roundId",
          "type": "u32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "counter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "round",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u32"
          },
          {
            "name": "drawn",
            "type": "bool"
          },
          {
            "name": "closed",
            "type": "bool"
          },
          {
            "name": "lastTicketId",
            "type": "u32"
          },
          {
            "name": "winningNumber",
            "type": "u64"
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "waitingTime",
            "type": "u8"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "updatedAt",
            "type": "i64"
          },
          {
            "name": "smallTotalAmount",
            "type": "u64"
          },
          {
            "name": "bigTotalAmount",
            "type": "u64"
          },
          {
            "name": "betResult",
            "type": "u8"
          },
          {
            "name": "tickets",
            "type": {
              "vec": {
                "defined": "Ticket"
              }
            }
          }
        ]
      }
    },
    {
      "name": "ticket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u32"
          },
          {
            "name": "roundId",
            "type": "u32"
          },
          {
            "name": "claimed",
            "type": "bool"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "betValue",
            "type": "u8"
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "unacceptedAmount",
            "type": "u64"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "winAmount",
            "type": "u64"
          }
        ]
      }
    }
  ]
};

export const IDL: DappStarter = {
  "version": "0.1.0",
  "name": "dapp_starter",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "config",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "deployer",
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
      "name": "increment",
      "accounts": [
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "createRound",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "round",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "roundId",
          "type": "u32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "counter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "round",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u32"
          },
          {
            "name": "drawn",
            "type": "bool"
          },
          {
            "name": "closed",
            "type": "bool"
          },
          {
            "name": "lastTicketId",
            "type": "u32"
          },
          {
            "name": "winningNumber",
            "type": "u64"
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "waitingTime",
            "type": "u8"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "updatedAt",
            "type": "i64"
          },
          {
            "name": "smallTotalAmount",
            "type": "u64"
          },
          {
            "name": "bigTotalAmount",
            "type": "u64"
          },
          {
            "name": "betResult",
            "type": "u8"
          },
          {
            "name": "tickets",
            "type": {
              "vec": {
                "defined": "Ticket"
              }
            }
          }
        ]
      }
    },
    {
      "name": "ticket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u32"
          },
          {
            "name": "roundId",
            "type": "u32"
          },
          {
            "name": "claimed",
            "type": "bool"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "betValue",
            "type": "u8"
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "unacceptedAmount",
            "type": "u64"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "winAmount",
            "type": "u64"
          }
        ]
      }
    }
  ]
};

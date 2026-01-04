window.BENCHMARK_DATA = {
  "lastUpdate": 1767523183812,
  "repoUrl": "https://github.com/Dan0xE/BincodeF",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "danopperm@gmail.com",
            "name": "Daniel Oppermann",
            "username": "Dan0xE"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c750762cce1047fbf2f73d6521f5ab0460d6abfc",
          "message": "chore: raise MSRV & fix workflows (#9)\n\n* ci: fix workflows & add benchmark workflow\n\n* chore: raise MSRV to rustc `1.86`\n\n* fix: attempt to fix benchmark workflow\n\n* fix: allow(dead_code)\n\n* chore: bump edition to 2024\n\n* fix: `gen` keyword is now reserved\n\n* fix: workflow triggers\n\n* fix: path to README\n\n* refactor: track historical benchmark data",
          "timestamp": "2026-01-03T19:37:14+01:00",
          "tree_id": "b4db31ae3f66137615f10885b07b05f630591f63",
          "url": "https://github.com/Dan0xE/BincodeF/commit/c750762cce1047fbf2f73d6521f5ab0460d6abfc"
        },
        "date": 1767465672177,
        "tool": "cargo",
        "benches": [
          {
            "name": "inline_decoder_claim_bytes_read",
            "value": 37951,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench v1",
            "value": 69237,
            "range": "± 713",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 (standard)",
            "value": 70085,
            "range": "± 817",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 (legacy)",
            "value": 71262,
            "range": "± 614",
            "unit": "ns/iter"
          },
          {
            "name": "bench v1 decode",
            "value": 282070,
            "range": "± 751",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 decode (legacy)",
            "value": 301540,
            "range": "± 835",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u8",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u16",
            "value": 20937,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u32",
            "value": 19991,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u64",
            "value": 23106,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u8",
            "value": 333,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u16",
            "value": 25106,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u32",
            "value": 25432,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u64",
            "value": 25620,
            "range": "± 29",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "danopperm@gmail.com",
            "name": "Daniel Oppermann",
            "username": "Dan0xE"
          },
          "committer": {
            "email": "danopperm@gmail.com",
            "name": "Daniel Oppermann",
            "username": "Dan0xE"
          },
          "distinct": true,
          "id": "a3a6b1c711c57484d63c61586429e4dfc497fd82",
          "message": "chore: merge main",
          "timestamp": "2026-01-03T19:49:27+01:00",
          "tree_id": "3bea13de93709f1b5fa8a42b52d1c3d803a6c9cd",
          "url": "https://github.com/Dan0xE/BincodeF/commit/a3a6b1c711c57484d63c61586429e4dfc497fd82"
        },
        "date": 1767466393601,
        "tool": "cargo",
        "benches": [
          {
            "name": "inline_decoder_claim_bytes_read",
            "value": 44929,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "bench v1",
            "value": 48169,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 (standard)",
            "value": 54464,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 (legacy)",
            "value": 47582,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "bench v1 decode",
            "value": 262751,
            "range": "± 3932",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 decode (legacy)",
            "value": 278885,
            "range": "± 1435",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u8",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u16",
            "value": 14052,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u32",
            "value": 18759,
            "range": "± 959",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u64",
            "value": 21852,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u8",
            "value": 3122,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u16",
            "value": 14947,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u32",
            "value": 19900,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u64",
            "value": 29457,
            "range": "± 79",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "danopperm@gmail.com",
            "name": "Daniel Oppermann",
            "username": "Dan0xE"
          },
          "committer": {
            "email": "danopperm@gmail.com",
            "name": "Daniel Oppermann",
            "username": "Dan0xE"
          },
          "distinct": true,
          "id": "7bb699344280d9fc5f7689ad826fff68a83e8945",
          "message": "chore: bump version",
          "timestamp": "2026-01-03T20:07:46+01:00",
          "tree_id": "59ccb9afc51b5fffb689c752be07e2194010d77f",
          "url": "https://github.com/Dan0xE/BincodeF/commit/7bb699344280d9fc5f7689ad826fff68a83e8945"
        },
        "date": 1767467498708,
        "tool": "cargo",
        "benches": [
          {
            "name": "inline_decoder_claim_bytes_read",
            "value": 45049,
            "range": "± 1196",
            "unit": "ns/iter"
          },
          {
            "name": "bench v1",
            "value": 46966,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 (standard)",
            "value": 54594,
            "range": "± 873",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 (legacy)",
            "value": 47015,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench v1 decode",
            "value": 264693,
            "range": "± 2681",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 decode (legacy)",
            "value": 281152,
            "range": "± 2600",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u8",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u16",
            "value": 14149,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u32",
            "value": 15681,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u64",
            "value": 24983,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u8",
            "value": 504,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u16",
            "value": 15476,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u32",
            "value": 16853,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u64",
            "value": 23422,
            "range": "± 110",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "danopperm@gmail.com",
            "name": "Daniel Oppermann",
            "username": "Dan0xE"
          },
          "committer": {
            "email": "danopperm@gmail.com",
            "name": "Daniel Oppermann",
            "username": "Dan0xE"
          },
          "distinct": true,
          "id": "a0c384037d6b84313a41b31d147afbbd413bccc0",
          "message": "chore: remove badges",
          "timestamp": "2026-01-04T11:33:51+01:00",
          "tree_id": "b405b8256bfbf529cf7fdc1a664c5203b260ba7c",
          "url": "https://github.com/Dan0xE/BincodeF/commit/a0c384037d6b84313a41b31d147afbbd413bccc0"
        },
        "date": 1767523073750,
        "tool": "cargo",
        "benches": [
          {
            "name": "inline_decoder_claim_bytes_read",
            "value": 43815,
            "range": "± 2278",
            "unit": "ns/iter"
          },
          {
            "name": "bench v1",
            "value": 46919,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 (standard)",
            "value": 54135,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 (legacy)",
            "value": 46467,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench v1 decode",
            "value": 281203,
            "range": "± 1781",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 decode (legacy)",
            "value": 277165,
            "range": "± 970",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u8",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u16",
            "value": 13837,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u32",
            "value": 15673,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u64",
            "value": 15658,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u8",
            "value": 501,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u16",
            "value": 14777,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u32",
            "value": 16898,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u64",
            "value": 17335,
            "range": "± 122",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "danopperm@gmail.com",
            "name": "Daniel Oppermann",
            "username": "Dan0xE"
          },
          "committer": {
            "email": "danopperm@gmail.com",
            "name": "Daniel Oppermann",
            "username": "Dan0xE"
          },
          "distinct": true,
          "id": "c91740b9bd93c9f4da7cd373fcbb534b599b2fe8",
          "message": "chore: remove badges",
          "timestamp": "2026-01-04T11:35:53+01:00",
          "tree_id": "9998b79475ad90b6d1a4d50425ee31ca5d01f3bc",
          "url": "https://github.com/Dan0xE/BincodeF/commit/c91740b9bd93c9f4da7cd373fcbb534b599b2fe8"
        },
        "date": 1767523183462,
        "tool": "cargo",
        "benches": [
          {
            "name": "inline_decoder_claim_bytes_read",
            "value": 43333,
            "range": "± 1478",
            "unit": "ns/iter"
          },
          {
            "name": "bench v1",
            "value": 48272,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 (standard)",
            "value": 53783,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 (legacy)",
            "value": 47121,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench v1 decode",
            "value": 275184,
            "range": "± 1095",
            "unit": "ns/iter"
          },
          {
            "name": "bench v2 decode (legacy)",
            "value": 272358,
            "range": "± 768",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u8",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u16",
            "value": 14144,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u32",
            "value": 15607,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "slice_varint_u64",
            "value": 15648,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u8",
            "value": 3077,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u16",
            "value": 14701,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u32",
            "value": 17100,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bufreader_varint_u64",
            "value": 29943,
            "range": "± 5144",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}
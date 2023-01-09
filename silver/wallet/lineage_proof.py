from dataclasses import dataclass
from typing import Optional

from silver.types.blockchain_format.sized_bytes import bytes32
from silver.util.ints import uint64
from silver.util.streamable import Streamable, streamable


@dataclass(frozen=True)
@streamable
class LineageProof(Streamable):
    parent_name: bytes32
    inner_puzzle_hash: Optional[bytes32]
    amount: uint64

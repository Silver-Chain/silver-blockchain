import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("SILVER_ROOT", "~/.silver/mainnet"))).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("SILVER_KEYS_ROOT", "~/.silver_keys"))).resolve()

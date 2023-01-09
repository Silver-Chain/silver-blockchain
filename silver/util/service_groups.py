from typing import Generator, KeysView

SERVICES_FOR_GROUP = {
    "all": "silver_harvester silver_timelord_launcher silver_timelord silver_farmer silver_full_node silver_wallet".split(),
    "node": "silver_full_node".split(),
    "harvester": "silver_harvester".split(),
    "farmer": "silver_harvester silver_farmer silver_full_node silver_wallet".split(),
    "farmer-no-wallet": "silver_harvester silver_farmer silver_full_node".split(),
    "farmer-only": "silver_farmer".split(),
    "timelord": "silver_timelord_launcher silver_timelord silver_full_node".split(),
    "timelord-only": "silver_timelord".split(),
    "timelord-launcher-only": "silver_timelord_launcher".split(),
    "wallet": "silver_wallet silver_full_node".split(),
    "wallet-only": "silver_wallet".split(),
    "introducer": "silver_introducer".split(),
    "simulator": "silver_full_node_simulator".split(),
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups) -> Generator[str, None, None]:
    for group in groups:
        for service in SERVICES_FOR_GROUP[group]:
            yield service


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())

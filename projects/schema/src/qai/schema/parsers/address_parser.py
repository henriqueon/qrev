from typing import Any, cast, Type

from postal.parser import parse_address  # type: ignore

from qai.schema.models.models import Address as Address
from qai.schema.extensions import ET
from functools import partial

def transform_address(s: str) -> Address:
    """
    Transform an address string into a structured address object.
    Args:
        s: The address string to parse.
    Returns:
        An Address object.

    Fields inside parsed address:
    "house_number"
    "street"
    "street2"
    "city"
    "state"
    "postal_code"
    "country"

    """
    # expanded_address = expand_address(address)[0]
    parsed_address = parse_address(s)

    address_dict: dict[str, Any] = {
        "current": False,
    }
    street_parts = []
    for component, label in parsed_address:
        if label in ("house_number", "road"):
            street_parts.append(component)
        elif label in ("city", "suburb"):
            address_dict["city"] = component
        elif label == "state":
            address_dict["state"] = component
        elif label == "postcode":
            address_dict["postal_code"] = component
        elif label == "country":
            address_dict["country"] = component
    if street_parts is not None:
        address_dict["street"] = " ".join(street_parts)
    ## Remove empy strings
    address_dict = {k: v for k, v in address_dict.items() if v}
    return Address(**address_dict)

# @classmethod
# def _from_str(cls: type[Address], s: str) -> Address:
#     return transform_address(s)

        
# func = partial(transform_address, Address)
# Address.from_str = transform_address


# Address.from_str = _from_str

# print(Address.from_str("Stillwater, Oklahoma, United States"))
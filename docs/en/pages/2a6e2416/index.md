---
title: "FireCCI51: MODIS Fire_cci Burned Area Pixel Product, Version 5.1"
date: 2026-11-03 12:00:00
---

# FireCCI51: MODIS Fire_cci Burned Area Pixel Product, Version 5.1

Original name: FireCCI51: MODIS Fire_cci Burned Area Pixel Product, Version 5.1

## What this dataset is

The MODIS Fire_cci Burned Area pixel product version 5.1 (FireCCI51)
is a monthly global ~250m spatial resolution dataset
containing information on burned area as well as ancillary data. It is based
on surface reflectance in the Near Infrared (NIR) band from the MODIS
instrument onboard the Terra satellite, as well as active fire information from
the same sensor of the Terra and Aqua satellites.

The burned area algorithm uses a two-phase hybrid approach. In a first step
pixels with a high probability of being burned (called "seeds") are detected
based on the active fires. In a second one, a contextual growing is applied to
completely detect the fire patch. This growing phase is controlled by an
adaptive thresholding, where thresholds are computed based on the specific
characteristics of the area surrounding each seed. The variable used to guide
the whole detection process is the NIR drop between pre- and post-fire images.

The dataset includes for each pixel the estimated day of the first detection of
the fire, the confidence level of that detection, and the land cover that has
been burned (extracted from the ESA CCI Land Cover dataset v2.0.7). In addition,
an observation flag is provided to identify the pixels that were not processed due
to the lack of valid observations or because they belong to a non-burnable land
cover.

FireCCI51 was developed as part of the ESA Climate Change Initiative (CCI)
Programme, and it is also part of the Copernicus Climate Change Service (C3S).

## Coverage and time range

- Coverage: Global
- Time range: 2001-01-01 至 2020-12-01
- Cadence: Monthly

## Resolution and specifications

- Spatial resolution: about 250 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| BurnDate | Estimated day of the year of the first detection of the burn | 250 |  |
| ConfidenceLevel | Probability of detecting a pixel as burned, expressing the uncertainty of the detection for all pixels, even if they are classified as unburned. | 250 |  |
| LandCover | Land cover category of the burned pixels, extracted from the CCI LandCover v2.0.7 product. See Defourny, P., Lamarche, C., Bontemps, S., De Maet, T., Van Bogaert, E., Moreau, I., Brockmann, C., Boettcher, M., Kirches, G., Wevers, J., Santoro, M., Ramoino, F., &amp; Arino, O.  (2017). Land Cover Climate Change Initiative - Product User Guide v2. Issue 2.0. [online] Available at: [https://maps.elie.ucl.ac.be/CCI/viewer/download/ESACCI-LC-Ph2-PUGv2_2.0.pdf](https://maps.elie.ucl.ac.be/CCI/viewer/download/ESACCI-LC-Ph2-PUGv2_2.0.pdf) accessed: July 2020. &copy; ESA Climate Change Initiative - Land Cover led by UCLouvain (2017). | 250 |  |
| ObservedFlag | Flags indicating why a pixel was not processed.  * -2: the pixel is not burnable (water bodies, bare areas, urban areas, permanent snow and ice) * -1: the pixel has not been observed during the month (due to clouds, cloud shadows or sensor failure) | 250 |  |

## What you can use it for

- Global burned area mapping and fire emission estimation
- Analyzing fire impacts on land cover change
- Fire regime studies under climate change

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('ESA/CCI/FireCCI/5_1');
```

- Earth Engine ID: `ESA/CCI/FireCCI/5_1`
- Providers: European Space Agency (ESA) Climate Change Initiative (CCI) Programme, Fire ECV, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/ESA_CCI_FireCCI_5_1

## License and citation

- License: proprietary
- Keywords: burn, c3s, cci, climate-change, copernicus, esa, fire, firecci, firecci51, fragmentation, gcos, geophysical, global, human-modification, landcover, landscape-gradient, modis, monthly, stressors
- 数据引用：Product: Chuvieco, E.; Pettinari, M.L.; Lizundia-Loiola, J.; Storm, T.;
Padilla Parellada, M. (2018): ESA Fire Climate Change Initiative
(Fire_cci): MODIS Fire_cci Burned Area Pixel product, version 5.1. Centre for
Environmental Data Analysis, 01 November 2018.
[https://doi.org/10.5285/58f00d8814064b79a0c49662ad3af537](https://doi.org/10.5285/58f00d8814064b79a0c49662ad3af537).

- DOI：10.5285/58f00d8814064b79a0c49662ad3af537

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [FIRMS: Fire Information for Resource Management System](/pages/4ae50fa9/)
- [FORMA Alert Thresholds](/pages/299d3b97/)
- [FORMA Alerts](/pages/d92138fe/)
- [FORMA Raw Output FIRMS](/pages/721e383c/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.

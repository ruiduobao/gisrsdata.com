---
title: "NASADEM: NASA 30m Digital Elevation Model"
date: 2026-11-03 12:00:00
---

# NASADEM: NASA 30m Digital Elevation Model

Original name: NASADEM: NASA 30m Digital Elevation Model

## What this dataset is

NASADEM is a reprocessing of SRTM data, with improved accuracy by incorporating auxiliary data
from ASTER GDEM, ICESat GLAS, and PRISM datasets.

The most significant processing improvements involve void reduction through improved
phase unwrapping and using ICESat GLAS data for control.

## Coverage and time range

- Coverage: Coverage: global; time span: February 11 to 22, 2000; resolution: 30 m.
- Time range: 2000-02-11 至 2000-02-22

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| elevation | Integer heights in the merged void-free DEM files are relative to the EGM96 geoid (whereas the floating-point heights in the SRTM-only DEM files are relative to the WGS84 ellipsoid). | 30 |  |
| num | Index indicating the data source and the number of source scenes.    * 0: Water in corrected SRTM water body data   * 1-23: SRTM 1-23 (max known is 23)   * 41-94: PRISM 1-50 (54 max polar, 37 max elsewhere)   * 110-160: GDEM3 (saturated at 50)   * 170-220: GDEM2 (saturated at 50)   * 231: SRTMv3 from GDEM3   * 232: SRTMv2 from GDEM3   * 233: SRTMv2 from GDEM2   * 234: SRTM-with-NGA-fill from GDEM2   * 241: NED from GDEM2 (USA)   * 242: NED from GDEM3 (USA)   * 243: CDED from GDEM2 (Canada)   * 244: CDED from GDEM3 (Canada)   * 245: Alaska from GDEM2 (Alaska)   * 246: Alaska from GDEM3 (Alaska)   * 250: Interpolation   * 251: Quad edge averaged where two neighboring quads disagreed (generally a GDEM error)   * 255: ERROR (if NUM IS MISSING - none known to exist) | 30 |  |
| swb | Updated SRTM water body data    * 0: Land   * 255: Water | 30 |  |

## What you can use it for

- Terrain analysis and geomorphology
- Hydrological modeling
- Elevation data applications

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('NASA/NASADEM_HGT/001');
```

- Earth Engine ID: `NASA/NASADEM_HGT/001`
- Providers: NASA / USGS / JPL-Caltech, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_NASADEM_HGT_001
* [User's Guide](https://lpdaac.usgs.gov/documents/592/NASADEM_User_Guide_V1.pdf)

## License and citation

- License: proprietary
- Keywords: dem, elevation, elevation-topography, geophysical, nasa, nasadem, srtm, topography, usgs
- 数据引用：NASA JPL (2020). NASADEM Merged DEM Global 1 arc second V001 [Data set]. NASA EOSDIS Land
Processes DAAC. Accessed 2020-12-30 from [doi:10.5067/MEaSUREs/NASADEM/NASADEM_HGT.001](https://doi.org/10.5067/MEaSUREs/NASADEM/NASADEM_HGT.001)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS DSM: Global 30m  v4.1](/en/pages/774620fb/)
- [How to Download the ASTER Global DEM](/en/pages/da7fa1/)
- [CryoSat-2 Antarctica 1 km DEM](/en/pages/a0390601/)
- [GHSL: Global building volume 1975-2030 (P2023A)](/en/pages/a37f30e2/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.

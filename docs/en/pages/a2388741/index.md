---
title: "CFSR: Climate Forecast System Reanalysis Harmonized"
date: 2026-11-03 12:00:00
---

# CFSR: Climate Forecast System Reanalysis Harmonized

Original name: CFSR: Climate Forecast System Reanalysis Harmonized

## What this dataset is

The National Centers for Environmental Prediction (NCEP) Climate Forecast
System Reanalysis (CFSR) was designed and executed as a global,
high-resolution, coupled atmosphere-ocean-land surface-sea ice system to
provide the best estimate of the state of these coupled domains over the
32-year period of record from January 1979 to March 2011. It has been
extended as an operational real-time product. The data in Earth Engine are
only present starting from December 13, 2018.

Forecasts are initialized four times per day (0000, 0600, 1200, and 1800
UTC). We ingest only a subset of bands from files matching
`cdas1.t??z.pgrbh**03|00**.grib2`, i.e. files of only 0-hour and 3-hour
forecasts as the others are omitted. The forecast length is indicated by the
'forecast_hour' metadata field.

Some images contain only a subset of bands. Using this dataset with both
"00" and "03" forecast types will require you to cast the bands across
the collection.

This dataset harmonizes all temperature bands to Kelvin.

## Coverage and time range

- Coverage: Coverage: global; time span: 2018 to 2026; resolution: 55,660 m.
- Time range: 2018-12-13 至 2026-11-02

## Resolution and specifications

- Spatial resolution: about 55,660 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| u-component_of_wind_hybrid | u-component of wind at Hybrid level for 00 and 03 forecast | 55660 |  |
| v-component_of_wind_hybrid | v-component of wind at Hybrid level for 00 and 03 forecast | 55660 |  |
| Albedo_surface_3_Hour_Average | Albedo 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Canopy_water_evaporation_surface_3_Hour_Average | Canopy water evaporation 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Categorical_Rain_surface | Categorical Rain at ground or water surface for 00 and 03 forecast | 55660 |  |
| Categorical_Rain_surface_3_Hour_Average | Categorical Rain 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Categorical_Freezing_Rain_surface_3_Hour_Average | Categorical freezing rain 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Categorical_Ice_Pellets_surface_3_Hour_Average | Categorical ice pellets 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Categorical_Snow_surface_3_Hour_Average | Categorical snow 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Clear_Sky_Downward_Long_Wave_Flux_surface_3_Hour_Average | Clear Sky Downward Long Wave Flux 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Clear_Sky_Downward_Solar_Flux_surface_3_Hour_Average | Clear Sky Downward Solar Flux 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Clear_Sky_Upward_Long_Wave_Flux_surface_3_Hour_Average | Clear Sky Upward Long Wave Flux 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Clear_Sky_Upward_Solar_Flux_atmosphere_top_3_Hour_Average | Clear Sky Upward Solar Flux 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Clear_sky_UV-B_Downward_Solar_Flux_surface_3_Hour_Average | Clear Sky UV-B Downward Solar Flux 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Cloud_water_entire_atmosphere_single_layer | Cloud water at entire atmosphere layer for 00 and 03 forecast | 55660 |  |
| Cloud_Work_Function_entire_atmosphere_single_layer_3_Hour_Average | Cloud work function 3 hour average at entire atmosphere layer for 03 forecast | 55660 |  |
| Convective_available_potential_energy_surface | Convective available potential energy at ground or water surface for 00 and 03 forecast | 55660 |  |
| Convective_available_potential_energy_pressure_difference_layer | Convective available potential energy at specified pressure difference from ground to level layer for 03 forecast | 55660 |  |
| Convective_Precipitation_Rate_surface_3_Hour_Average | Convective precipitation rate 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Convective_precipitation_surface_3_Hour_Accumulation | Convective precipitation 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Direct_Evaporation_from_Bare_Soil_surface_3_Hour_Average | Direct evaporation from bare soil surface 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Downward_Long-Wave_Radp_Flux_surface | Downward Long-Wave Rad. Flux at ground or water surface for 00 and 03 forecast | 55660 |  |
| Downward_Long-Wave_Radp_Flux_surface_3_Hour_Average | Downward Long-Wave Rad. Flux  3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Downward_Short-Wave_Radiation_Flux_surface | Downward Short-Wave Radiation Flux at ground or water surface for 00 and 03 forecast | 55660 |  |
| Downward_Short-Wave_Radiation_Flux_surface_3_Hour_Average | Downward Short-Wave Radiation Flux 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Downward_Short-Wave_Radiation_Flux_atmosphere_top_3_Hour_Average | Downward Short-Wave Radiation Flux atmosphere top 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Exchange_Coefficient_surface | Exchange Coefficient at ground or water surface for 00 and 03 forecast | 55660 |  |
| Frictional_Velocity_surface | Frictional Velocity at ground or water surface for 00 and 03 forecast | 55660 |  |
| Ground_Heat_Flux_surface | Ground Heat Flux at ground or water surface for 00 and 03 forecast | 55660 |  |
| Ground_Heat_Flux_surface_3_Hour_Average | Ground Heat Flux 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Ice_cover_surface | Ice cover at ground or water surface for 00 and 03 forecast | 55660 |  |
| Ice_thickness_surface | Ice thickness at ground or water surface for 00 and 03 forecast | 55660 |  |
| Land_cover_0__sea_1__land_surface | Land cover (0 = sea, 1 = land) at ground or water surface for 00 and 03 forecast | 55660 |  |
| Latent_heat_net_flux_surface | Latent heat net flux at ground or water surface for 00 and 03 forecast | 55660 |  |
| Latent_heat_net_flux_surface_3_Hour_Average | Latent heat net flux 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Liquid_Volumetric_Soil_Moisture_non_Frozen_depth_below_surface_layer_5_cm | Liquid Volumetric Soil Moisture (non Frozen) 5 cm depth below land surface layer | 55660 |  |
| Liquid_Volumetric_Soil_Moisture_non_Frozen_depth_below_surface_layer_25_cm | Liquid Volumetric Soil Moisture (non Frozen) 25 cm depth below land surface layer | 55660 |  |
| Liquid_Volumetric_Soil_Moisture_non_Frozen_depth_below_surface_layer_70_cm | Liquid Volumetric Soil Moisture (non Frozen) 70 cm depth below land surface layer | 55660 |  |
| Liquid_Volumetric_Soil_Moisture_non_Frozen_depth_below_surface_layer_150_cm | Liquid Volumetric Soil Moisture (non Frozen) 150 cm depth below land surface layer | 55660 |  |
| Maximum_temperature_height_above_ground_3_Hour_Interval | Maximum temperature for 3 Hour Interval at specified height level above ground for 03 forecast | 55660 |  |
| Minimum_temperature_height_above_ground_3_Hour_Interval | Minimum temperature for 3 Hour Interval at specified height level above ground for 03 forecast | 55660 |  |
| Maximum_specific_humidity_at_2m_height_above_ground_3_Hour_Interval | Maximum specific humidity for 3 Hour Interval at 2m specified height level above ground for 03 forecast | 55660 |  |
| Minimum_specific_humidity_at_2m_height_above_ground_3_Hour_Interval | Minimum specific humidity for 3 Hour Interval at 2m specified height level above ground for 03 forecast | 55660 |  |
| Momentum_flux_u-component_surface_3_Hour_Average | Momentum flux, u-component 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Momentum_flux_v-component_surface_3_Hour_Average | Momentum flux, u-component 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Plant_Canopy_Surface_Water_surface | Plant Canopy Surface Water at ground or water surface for 00 and 03 forecast | 55660 |  |
| Planetary_Boundary_Layer_Height_surface | Planetary Boundary Layer Height at ground or water surface for 00 and 03 forecast | 55660 |  |
| Potential_Evaporation_Rate_surface | Potential Evaporation Rate at ground or water surface for 00 and 03 forecast | 55660 |  |
| Potential_Evaporation_Rate_surface_3_Hour_Average | Potential Evaporation Rate 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Precipitation_rate_surface_3_Hour_Average | Precipitable rate 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Precipitable_water_entire_atmosphere_single_layer | Precipitable water at entire atmosphere layer for 00 and 03 forecast | 55660 |  |
| Precipitable_water_pressure_difference_layer | Precipitable water at specified pressure difference from ground to level layer for 00 forecast | 55660 |  |
| Pressure_msl | Pressure at Mean sea level for 03 forecast | 55660 |  |
| Pressure_reduced_to_MSL_msl | Pressure reduced to MSL at Mean sea level for 00 and 03 forecast | 55660 |  |
| Pressure_surface | Pressure at ground or water surface for 00 and 03 forecast | 55660 |  |
| Relative_humidity_entire_atmosphere_single_layer | Relative humidity at entire atmosphere layer for 00 and 03 forecast | 55660 |  |
| Sensible_heat_net_flux_surface | Sensible heat net flux at ground or water surface for 00 and 03 forecast | 55660 |  |
| Sensible_heat_net_flux_surface_3_Hour_Average | Sensible heat net flux 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Snow_Cover_surface_3_Hour_Average | Snow cover 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Snow_depth_surface | Snow depth at ground or water surface for 00 and 03 forecast | 55660 |  |
| Snow_Phase_Change_Heat_Flux_surface_3_Hour_Average | Snow phase change heat flux 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Soil_moisture_content_depth_below_surface_layer | Soil moisture content at Depth below land surface layer for 00 and 03 forecast | 55660 |  |
| Soil_type_surface | Soil type at ground or water surface for 00 and 03 forecast | 55660 |  |
| Storm_Surface_Runoff_surface_3_Hour_Accumulation | Storm surface runoff 3 hour accumulation at ground or water surface for 03 forecast | 55660 |  |
| Sublimation_evaporation_from_snow_surface_3_Hour_Average | Sublimation (evaporation from snow) 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Specific_humidity_height_above_ground | Specific humidity at Specified height level above ground for 00 forecast | 55660 |  |
| Surface_Lifted_Index_surface | Surface Lifted Index at ground or water surface for 00 and 03 forecast | 55660 |  |
| Surface_roughness_surface | Surface roughness at ground or water surface for 00 and 03 forecast | 55660 |  |
| Surface_Slope_Type_surface | Surface Slope Type at ground or water surface for 00 and 03 forecast | 55660 |  |
| Temperature_depth_below_surface_layer_5_cm | Temperature 5cm depth below land surface layer for 00 and 03 forecast | 55660 |  |
| Temperature_depth_below_surface_layer_25_cm | Temperature 25cm depth below land surface layer for 00 and 03 forecast | 55660 |  |
| Temperature_depth_below_surface_layer_70_cm | Temperature 70 cm depth below land surface layer for 00 and 03 forecast | 55660 |  |
| Temperature_depth_below_surface_layer_150_cm | Temperature 150cm depth below land surface layer for 00 and 03 forecast | 55660 |  |
| Temperature_height_above_ground | Temperature at Specified height level above ground for 00 forecast | 55660 |  |
| Temperature_surface | Temperature at ground or water surface for 00 and 03 forecast | 55660 |  |
| Total_cloud_cover_convective_cloud | Total cloud cover at Convective cloud layer for 00 forecast | 55660 |  |
| Total_ozone_entire_atmosphere_single_layer | Total ozone at entire atmosphere layer for 00 and 03 forecast | 55660 |  |
| Total_precipitation_surface_3_Hour_Accumulation | Total precipitation 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Transpiration_surface_3_Hour_Average | Transpiration surface 3 hour average at ground or water surface for 03 forecast | 55660 |  |
| Upward_Long-Wave_Radp_Flux_surface | Upward Long-Wave Rad. Flux at ground or water surface for 00 and 03 forecast | 55660 |  |

## What you can use it for

- Climate forecast system reanalysis
- Weather and climate modeling
- Atmospheric variable analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/CFSR_HARMONIZED');
```

- Earth Engine ID: `NOAA/CFSR_HARMONIZED`
- Providers: NOAA NWS National Centers for Environmental Prediction (NCEP), Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_CFSR_HARMONIZED

## License and citation

- License: proprietary
- Keywords: climate, daylight, flux, forecast, geophysical, ncep, noaa, nws, precipitation, radiation, snow, temperature, vapor, water, weather, weather-and-climate
- 数据引用：Saha, S., S. Moorthi, H. Pan, X. Wu, J. Wang, and Coauthors, 2010: The NCEP
Climate Forecast System Reanalysis. Bulletin of the American Meteorological
Society, 91, 1015-1057.
[doi:10.1175/2010BAMS3001.1](https://doi.org/10.1175/2010BAMS3001.1)

- DOI：10.5065/D6513W89

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products Harmonized](/en/pages/a1cd75f1/)
- [Daymet V4: Daily Surface Weather and Climatological Summaries](/en/pages/7b6d050e/)
- [ECMWF Near-Realtime IFS Atmospheric Forecasts](/en/pages/3fdfa56d/)
- [ERA5-Land Monthly Averaged by Hour of Day — ECMWF Climate Reanalysis](/en/pages/39c04517/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.

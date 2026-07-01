package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.cognizant.springlearn.service.CountryCodeService;
@RestController
public class CountryCodeController {

    @Autowired
    private CountryCodeService countryCodeService;

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {

        return countryCodeService.getCountry(code);
    }
}